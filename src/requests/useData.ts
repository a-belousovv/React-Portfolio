import { QueryKey, useQuery } from '@tanstack/react-query'
import axios from 'axios'
export const useData = (key: QueryKey, blockTitle: string) => {
	const request = useQuery({
		queryKey: [key],
		queryFn: async () => {
			return await axios.get(
				`https://651e5bba44a3a8aa47682bdb.mockapi.io/data?blockTitle=${blockTitle}`
			)
		},
		select: ({ data }) => data[0],
	})
	return request
}
