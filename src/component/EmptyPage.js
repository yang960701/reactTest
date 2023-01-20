import { Link } from "react-router-dom";

export default function EmptyPage(){
    return(
        <div>
            <h1>empty page</h1>
                <Link to={"/"}>
                  戻る
                </Link>
        </div>
    );
}