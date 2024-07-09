export default function useScrtollTo(arg: string) {
  const element: HTMLCollectionOf<Element> = document.getElementsByClassName(arg)
  element[0].scrollIntoView({ behavior: 'smooth', block: 'start' })
}
