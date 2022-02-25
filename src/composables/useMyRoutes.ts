export const useMyRoutes = () => {
  const router = useRouter()
  const links = router.getRoutes().map(r => {
    return {
      name: r.path === '/' ? 'home' : r.name as string,
      path: r.path
    }
  })
  return links
}