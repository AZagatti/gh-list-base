import { Repo } from 'src/pages'
import { api } from 'src/services/api'

interface Params {
  per_page?: number;
  page?: number;
}

export const fetchUserRepos = async (username: string, params?: Params) => {
  return api.get<Repo[]>(`users/${username}/repos`, {
    params: {
      per_page: params?.per_page || 12,
      page: params?.page || 1
    }
  });
}
