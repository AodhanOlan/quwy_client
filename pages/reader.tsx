
import ReaderLayout from "../layouts/ReaderLayout";
import MainReader from "../components/reader/MainReader"

const Reader: React.FC = () => {
    const imageList = [
        "https://quwy.storage.yandexcloud.net/sachi-iro_no_one_room_v01_c001_0001.jpg",
        "https://quwy.storage.yandexcloud.net/sachi-iro_no_one_room_v01_c001_0002.jpg",
        "https://quwy.storage.yandexcloud.net/sachi-iro_no_one_room_v01_c001_0003.jpg"
    ]
    return (
        <ReaderLayout>
            <div className="reader-page">
                <MainReader images={imageList} />
            </div>
        </ReaderLayout >

    )
}
export default Reader;