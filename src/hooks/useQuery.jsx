import {useLocation} from 'react-router'


// creacion de un hook
export function useQuery(){
    return new URLSearchParams(useLocation().search);
}
