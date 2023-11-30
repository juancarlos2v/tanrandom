import Episodes from "@layouts/Episodes";
import Footer from "@layouts/Footer";
import Header from "@layouts/Header";
import News from "@layouts/News";

export default function Page() {
    return (
        <>
            <Header />
            <div className="p-3">
                <Episodes />
                <News />
            </div>
            <Footer />
        </>
    )
}