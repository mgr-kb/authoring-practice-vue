export const useMyRoutes = () => {
  const route = useRouter()
  const links = route.getRoutes().map(r => {
    return {
      name: r.path === '/' ? 'home' : r.name as string,
      path: r.path
    }
  })
  return links
}