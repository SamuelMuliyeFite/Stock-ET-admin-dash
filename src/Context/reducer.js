const reducer=(state,action)=>{
    
    switch(action.type){
        
               
    case 'signin':
        return{
            ...state,
            token:action.token
        }
        case 'signuprequest':
            return{
                ...state,
                signuprequest:action.signuprequest
            }
            case 'TotalSell':
            return{
                ...state,
                TotalSell:action.TotalSell
            }
            case 'amount':
                return{
                    ...state,
                    amount:action.amount
                }
                case 'customer':
                    return{
                        ...state,
                        customer:action.customer
                    }
                    case 'newcompany':
                        return{
                            ...state,
                            newCompanies :action.newCompanies
                        }
        default:
            return state
        }

    }
    export  default reducer;