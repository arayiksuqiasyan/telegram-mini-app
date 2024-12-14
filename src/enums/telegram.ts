export enum TelegramHomeScreenStatus {
  Unsupported = "unsupported", // – функция не поддерживается, и невозможно добавить значок на главный экран
  Unknown = "unknown", // – функция поддерживается, и значок можно добавить, но невозможно определить, был ли значок уже добавлен
  Added = "added", // – значок уже добавлен на главный экран
  Miss = "missed" // – значок не был добавлен на главный экран
}
/** use this for check mini app added phone or note **/
// import WebApp from '@twa-dev/sdk'
// if (typeof window !== 'undefined') {
//   try {
//     WebApp?.checkHomeScreenStatus?.((status as TelegramHomeScreenStatus) => {})
//   }catch{}
// }
