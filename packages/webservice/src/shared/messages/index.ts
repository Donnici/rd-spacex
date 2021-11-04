const messages = {
	error404: {
		ptBr: 'A rota não foi encontrada'
	},
	error500: {
		ptBr: 'Aconteceu um erro interno no servidor'
	},
	running: {
		ptBr: 'API rodando na porta'
	},
	tokenNotFound: {
		ptBr: 'O token não foi fornecido'
	},
	tokenTypeError: {
		ptBr: 'O formato do token não é reconhecido'
	},
	invalidToken: {
		ptBr: 'O token informado está inválido, por favor refaça o login'
	},
	expiredToken: {
		ptBr: 'O token não está mais válido'
	},
	notAuthorized: {
		ptBr: 'Você não possui permissão para acessar esse recurso'
	},
	passwordNotMatch: {
		ptBr: 'A senha e a confirmação de senha são diferentes'
	},
	incorrectLength: {
		ptBr: 'O campo {path} deve conter {length}'
	},
	incorrectUrl: {
		ptBr: 'A url informada está incorreta'
	},
	invalitFormat: {
		ptBr: 'O formado do campo {path} está incorreto. O formato deve ser: {format}'
	},
	enumValues: {
		ptBr: 'O campo {path} pode assumir os seguintes valores: {enumValues}.'
	},
	textLength: {
		ptBr: 'O campo {path} deve possuir {length} caractéres.'
	},
	typeString: {
		ptBr: 'O tipo do campo deve ser texto'
	},
	typeNumber: {
		ptBr: 'O tipo do campo deve ser numérico'
	},
	typeBoolean: {
		ptBr: 'O tipo do campo deve ser boleano (true/false)'
	},
	required: {
		ptBr: 'O campo {path} é obrigatório!'
	},
	integer: {
		ptBr: 'O campo {path} deve ser inteiro'
	},
	isEmail: {
		ptBr: 'O campo deve está no formato de um email válido'
	}
};

type TLanguage = 'ptBr';
type TMessages = typeof messages;
type TKeyMessage = keyof TMessages;

export const getMessage = (
	key: TKeyMessage,
	options: Record<string, string> = { lang: 'ptBr' }
) => {
	return Object.keys(options).reduce(
		(acc, current: string) => acc.replace(`{${current}}`, options[current]),
		messages[key][options.lang as TLanguage]
	);
};
