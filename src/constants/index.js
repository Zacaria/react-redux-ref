export const URL_PERSON = 'https://maestrodev.excilys.com/maestro-ref/rest/person';
export const URL_LOGIN = 'https://maestrodev.excilys.com/maestro-ref/rest/login';
export const URL_SOCIETE = 'https://maestrodev.excilys.com/maestro-ref/rest/societes';


export const initialAppState = {
    table: {
        isFetching: false,
        data: [],
        filterString: '',
        sortDesc: false,
        sortKey: 'nom'
    },
    login: {
        isLogged: false,
        username:'',
        password:'',
        isLogging: false,
        error: ''
    },
    add: {
        listSociete: {}
    },
    edit: {
        personData: {}
    }
};
