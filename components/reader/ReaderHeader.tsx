import { useRouter } from "next/router";
const ReaderHeader: React.FC = () => {
    const router = useRouter();
    return (
        <div className="reader-header">
            <div className="reader-header__main header-main">
                <button onClick={router.back} className="header-main__button">Back</button>
                <div className="header-main__title">Title</div>
            </div>
        </div>
    )
 }

export default ReaderHeader;