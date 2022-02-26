type MyRoute = {
  name: string;
  path: string;
}

export const useMyRoutes = (nowPath = '') => {
  const router = useRouter()
  const routes = computed(() => {
    const links: MyRoute[] = []
    router.getRoutes().forEach(r => {
      const regex = nowPath ? new RegExp(nowPath) : null
      if (regex) {
        if (r.path.match(regex) && r.path !== nowPath) {
          links.push({
            name: r.path === '/' ? 'home' : r.name as string,
            path: r.path
          })
        }
      } else {
        links.push({
          name: r.path === '/' ? 'home' : r.name as string,
          path: r.path
        })
      }
    })
    return links
  })
  return {
    routes,
  }
}