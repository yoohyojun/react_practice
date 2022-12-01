import React, {useContext, useEffect} from "react";
import { UserDispatch } from './App_immer';

const User = React.memo(
    function User({user}) {
        const dispatch = useContext(UserDispatch);

        useEffect(() => {
            // useEffect 사용 시
            // 컴포넌트가 마운트/언마운트 됐을때 작업 시작 가능
            // props 로 받은 상태 값을 컴포넌트의 로컬 상태로 설정
            // 외부 API 요청
            // 라이브러리 사용
            // setinterval 을 통한 반복작업 혹은 setTimeout을 통한 작업예약

            // 두번째 인자에 빈 배열을 줄 경우 컴포넌트가 처음 나타날때만 useEffect에 등록한 함수 호출함
            // 두번째 인자를 아예 넣지 않으면 랜더링 될때마다 전체가 계속 실행됨
            // 특정 props가 바뀔때 작업하기 위해서는 두번째 인자로 값을 넘겨주면됨됨
            console.log('user 값이 설정됨 :');
            console.log(user);
            return () => {
                console.log('user가 바뀌기전');
                console.log(user);
            }
        }, [user]);

        return (
            <div>
                <b style={
                    {cursor: 'pointer',
                        color: user.active ? 'green' : 'black'}
                } onClick={() => dispatch({type: 'TOGGLE_USER', id:user.id}) }>
                    {user.username}
                </b>
                &nbsp;
                <span>({user.email})
            </span>
                <button onClick={() => dispatch({type:'REMOVE_USER', id:user.id})}>삭제</button>
            </div>
        )
    }
)
function UserList({ users }) {
    return (
        <div>
            {users.map((user) => (
                <User
                    key={user.id}
                    user={user}
                />
            ))}
        </div>
    )
}

export default React.memo(UserList);