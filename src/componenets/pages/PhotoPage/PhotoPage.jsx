

export default function PhotoPage() {

    return(
        <main className="photo-page">
            <div className="photo__container">
                <img />
                <div className="photo__tags">
                    <button className="photo__tag"></button>
                    <button className="photo__tag"></button>
                    <button className="photo__tag"></button>
                </div>
                <div className="photo__likes-photographer-date">
                    <div className="photo__likes-date">
                        <p className="photo__like"></p>
                        <p className="photo__date"></p>
                    </div>
                    <p className="photo__photographer">Photo by: </p>
                </div>
            </div>

        </main>
    )
}