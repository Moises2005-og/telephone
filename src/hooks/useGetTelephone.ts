import axios from 'axios'
import { url } from '../utils/endpoint'

export function useGetTelephone(endpoint: string) {
        try{
            async function fetcher() {
                const data = await axios.get(`${url}${endpoint}`)
                console.log(data)
            }
            fetcher()
        } catch(err) {
            console.log(err)
        }
}