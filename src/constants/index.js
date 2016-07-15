export const URL_PERSON = 'https://maestrodev.excilys.com/maestro-ref/rest/person';
export const URL_LOGIN = 'https://maestrodev.excilys.com/maestro-ref/rest/login';
export const URL_SOCIETE = 'https://maestrodev.excilys.com/maestro-ref/rest/societes';
export const URL_ADDRESS_C='https://maestrodev.excilys.com/maestro-ref/rest/person/address/correspondance';
export const URL_ADDRESS_H='https://maestrodev.excilys.com/maestro-ref/rest/person/address/home';
export const URL_CONTACT='https://maestrodev.excilys.com/maestro-ref/rest/person/contact';


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
