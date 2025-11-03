import { Router } from "express";
import * as skinJogosController from './../controllers/skinJogosController.js'

const router = Router();

router.get("/",skinJogosController.listarTodos);
router.get("/:id",skinJogosController.listarUm);
router.post("/;",skinJogosController.criar);
router.delete("/:id",skinJogosController.deletar);
router.put("/:id",skinJogosController.atualizar);

export default router;