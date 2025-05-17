import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../reduxtk/slices/userSlice";
import { useEffect } from "react";

export const User = () => {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.users)


    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])




    return (
        <div>
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {users.map((user) => {
                return <p key={user.id}>{user.name}</p>
            })}
        </div>
    )

}



export default User