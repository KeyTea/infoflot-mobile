import React, {useEffect} from "react";

export type Props = {
    dateStr: string
}
const GetDate: React.FC<Props> = ({dateStr}) => {
    const date: Date = new Date(dateStr);

    return (
        <>
            {date.toLocaleDateString('ru')} в {date.toLocaleTimeString('ru')}
            {/*В {date.getUTCHours()}:{date.getUTCMinutes()} {date.getUTCDate()}.{date.getUTCMonth()}.{date.getUTCFullYear()}*/}
        </>
    )
}

export default GetDate;
