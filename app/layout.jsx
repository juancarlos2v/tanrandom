import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css"

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    )
}