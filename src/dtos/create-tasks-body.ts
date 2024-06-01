import { IsNotEmpty } from "class-validator";

export class TarefasBody {
    @IsNotEmpty({
        message: "O campo de 'descricao' não pode ser vazio",
    })
    descricao: string;

    @IsNotEmpty({
        message: "O campo de 'categoriaId' não pode ser vazio",
    })
    categoriaId: number;
}