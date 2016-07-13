import tableActions from './tableActions'
import authentification from './authenticationAction'
import {addPerson, listSociete} from './addPersonAction'
import {loadPersonData} from './editPersonAction'


function resetErrorMessage() {
    return {type: ACTIONS.RESET_ERROR_MESSAGE}
}
export {
    tableActions,
    authentification,
    resetErrorMessage,
    addPerson,
    listSociete,
    loadPersonData
}


