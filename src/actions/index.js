import tableActions from './tableActions'
import authentification from './authenticationAction'
import {addPerson} from './addPersonAction'


function resetErrorMessage () {
    return { type: ACTIONS.RESET_ERROR_MESSAGE }
}
export {
    tableActions,
    authentification,
    resetErrorMessage,
    addPerson
}


