import { ActionType } from "../constant/action-types"
export const setProducts = (contacts) => {
    return {
        type : ActionType.ADD_CONTACT,
        payload : contacts
    }
}
export const viewProducts = (contacts) => {
    return {
        type : ActionType.VIEW_CONTACT,
        payload : contacts,
    }
}