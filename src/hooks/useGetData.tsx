import { useEffect, useState } from 'react'

export const useGetData = <T,>(axiosInstance: any) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | any>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                axiosInstance.then((res: any) => setData(res.data))
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { data, loading, error }
}
