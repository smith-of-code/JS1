function cueva(){
    let values = ['камень','ножницы','бумага'];
    let skyNetCount = 0;
    let userCount = 0;
    while (true){
        let skyNet = values[Math.floor(Math.random()*2)];
        let user = values[+prompt('Выберете:\n 1 - камень \n 2 - ножницы \n 3 - бумага') - 1];
        if (!user){
            alert(`Внимательнее!!!`);
            continue
        }
        if (skyNet.indexOf(user)=== 0){
            alert(`
                СкайНет(${skyNet})
                Пользователь(${user})
                счет:
                СкайНет(${skyNetCount})
                Пользователь(${userCount})
                `);
        }else {
            if (skyNet === 'камень' && user === 'ножницы' || skyNet === 'ножницы' && user === 'бумага' || skyNet === 'бумага' && user === 'камень'){
                ++skyNetCount;
                alert(`
                СкайНет(${skyNet})
                Пользователь(${user})
                счет:
                СкайНет(${skyNetCount})
                Пользователь(${userCount})
                `);
            }else {
                ++userCount;
                alert(`
                СкайНет(${skyNet})
                Пользователь(${user})
                счет:
                СкайНет(${skyNetCount})
                Пользователь(${userCount})
                `);

            }
        }
        if (skyNetCount === 3 || userCount === 3){

            if (skyNetCount > userCount){
                alert(`Победил СкайНет`);
                break
            } else {
                alert(`Победил Пользователь`);
                break
            }

        }
    }
}

cueva();