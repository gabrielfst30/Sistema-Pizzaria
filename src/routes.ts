import { Router, Request, Response } from "express";
import multer  from "multer";

//-----------------------------USER IMPORTS
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

//-----------------------------CATEGORY IMPORTS
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from "./controllers/category/ListCategoryController";

//----------------------------- PRODUCT IMPORTS
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

//----------------------------- ORDER IMPORTS
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";


//Importando o Middleware de verificação de autenticação por token
import { isAuthenticated } from './middlewares/isAuthenticated'

//Importando Multer para imagens 
import uploadConfig from './config/multer'

//instanciando a Router para a variável
const router = Router()

//Criando configuração do multer para ser usado como middleware
const upload = multer(uploadConfig.upload("./tmp"));


//------------------------- ROTAS USERS-------------------------

//Cadastro de usuário na aplicação
router.post('/users', new CreateUserController().handle)

//Login de usuário
router.post('/session', new AuthUserController().handle)

//Detalhes do usuário
router.get('/me', isAuthenticated, new DetailUserController().handle)

//------------------------- ROTAS CATEGORY-------------------------

//Cadastro das categorias de produtos
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

//Pegando e mostrando todas as categorias cadastradas
router.get('/category', isAuthenticated, new ListCategoryController().handle)


//------------------------- ROTAS PRODUCT-------------------------
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
//no request da api a imagem deve ser recebida com o nome 'file'

//listando a categoria dos produtos
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)


//------------------------- ROTAS ORDER-------------------------
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
//cadastrar um novo item order
router.post('/order/add', isAuthenticated, new AddItemController().handle)
//removendo um item da order
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
//atualizado o draft do pedido para false
router.put('/order/send', isAuthenticated, new SendOrderController().handle)


//-----Exportando a router para ser usado em outro arquivo------
export { router };