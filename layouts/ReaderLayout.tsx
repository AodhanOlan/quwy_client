import ReaderHeader from "../components/reader/ReaderHeader";
import ReaderFooter from "../components/reader/ReaderFooter";

const ReaderLayout: React.FC = ({ children }) => {
    return (
        <div className="reader-wrapper">
            <ReaderHeader/>
            {children}
        </div>
    )
}
export default ReaderLayout;