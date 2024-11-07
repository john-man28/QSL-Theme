let swal;

export default async function lazySwal() {
    if (!swal) {
        const module = await import('./sweet-alert');
        swal = module.default;
    }
    return swal;
}
