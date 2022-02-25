type Crumb = {
  name: string;
  path: string;
  isCurrent: boolean;
}

export const useBreadcrumbs = () => {
  const router = useRouter()
  const nowPath = useRoute().path
  const params = nowPath.substring(1).split('/')

  const crumbs: Crumb[] = []
  let path = ''

  params.forEach(param => {
    path = `${path}/${param}`
    const matchPath = router.getRoutes().find(r => r.path === path)
    if (matchPath?.name != null) {
      crumbs.push({
        name: matchPath.name as string,
        path: matchPath.path,
        isCurrent: nowPath === matchPath.path,
      })
    }
  })
  return crumbs
}
