export default async function ({ redirect, app }) {
    if (await app.$auth()) {
        // ログイン中だったらTOPに移動
        redirect('/')
    }
}