
import ReaderLayout from "../layouts/ReaderLayout";
import MainReader from "../components/reader/MainReader"

const Reader: React.FC = () => {
    const imageList = new Array(9).fill('').map((_, i) => `https://quwy.storage.yandexcloud.net/sachi-iro_no_one_room_v01_c001_000${i + 1}.jpg`)
    return (
        <ReaderLayout>
            <div className="reader-page">
                <MainReader images={imageList} />
            </div>
        </ReaderLayout >

    )
}
export default Reader;