import { ChangeEvent, FormEvent, useState } from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import styles from "./styles.module.scss";

import { canSSRAuth } from "@/utils/canSSRAuth";

import { FiUpload } from "react-icons/fi";

import { setupAPIClient } from "@/services/api";

import { toast } from "react-toastify";

//tipando a category list
type ItemProps = {
  id: string;
  name: string;
};

//recebendo a tipagem
interface CategoryProps {
  categoryList: ItemProps[];
}

export default function Product({ categoryList }: CategoryProps) {
  //inputs
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  //armazenar url
  const [avatarUrl, setAvatarUrl] = useState("");
  //armazenar a foto
  const [imageAvatar, setImageAvatar] = useState();

  const [categories, setCategories] = useState(categoryList || []);
  const [categorySelected, setCategorySelected] = useState(0);

  //função de imagem
  function handleFile(e: any) {
    //se não tiver arquivos
    if (!e.target.files) {
      return;
    }

    //variável de armazenar arquivo
    const image = e.target.files[0];

    //se não tiver imagem
    if (!image) {
      return;
    }

    //se tiver imagem
    if (image.type === "image/jpeg" || image.type === "image/png") {
      //armazenando imagem
      setImageAvatar(image);
      setAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  //quando seleciona uma nova categoria na lista
  function handleChangeCategory(event: any) {
    setCategorySelected(event.target.value);

    //console.log(event.target.value)
  }

  //função de cadastrar
  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    try {
      const data = new FormData();

      if (
        name === "" ||
        price === "" ||
        description === "" ||
        imageAvatar === null
      ) {
        toast.error("Preencha todos os campos!");
        return;
      }

      //enviando para API
      data.append("name", name);
      data.append("price", price);
      data.append("description", description);
      data.append("category_id", categories[categorySelected].id);
      data.append("file", imageAvatar);

      //inicializando api
      const apiClient = setupAPIClient();

      //postando
      await apiClient.post("/product", data);

      toast.success("Cadastrado com sucesso!");
    } catch (err) {
      toast.error("Erro ao cadastrar");
    }

    //zerando os campos após cadastro
    setName("");
    setPrice("");
    setDescription("");
    setImageAvatar(null);
    setAvatarUrl("");
  }

  return (
    <>
      <Head>
        <title>Novo produto - Sujeito Pizzaria</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <h1>Novo produto</h1>

          <form className={styles.form} onSubmit={handleRegister}>
            <label className={styles.labelAvatar}>
              <span>
                <FiUpload size={30} color="#FFF" />
              </span>

              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleFile}
              />

              {avatarUrl && (
                <img
                  className={styles.preview}
                  src={avatarUrl}
                  alt="Foto do produto"
                  width={250}
                  height={250}
                />
              )}
            </label>

            <select value={categorySelected} onChange={handleChangeCategory}>
              {categories.map((item, index) => {
                return (
                  <option key={item.id} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <input
              type="text"
              placeholder="Digite o nome do produto"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Preço do produto"
              className={styles.input}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <textarea
              placeholder="Descreva seu produto..."
              className={styles.input}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

//VERIFICAÇÃO SE O USUÁRIO TA LOGADO PARA ACESSAR ESSA ROTA
export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/category");

  return {
    props: {
      categoryList: response.data,
    },
  };
});
