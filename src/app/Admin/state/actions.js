import Types from './types'

// ====> Sweet ALert <====
// open success modal
export const createSWA = (type = "success", content = { title: "Success", message: "", time: 3000 }) => {
    switch(type) {
        // in case of success
        case "success":
            return { type: Types.SWA_SUCCESS_OPEN, payload: content }
        default:
            return    
    }   
}

// close Sweet Alert
export const closeSWA = () => ({ type: Types.SWA_CLOSE })