// let height = prompt('Enter your height:');
// let weight = prompt('Enter your weight:');

const height = 184;
const weight = 68;

let BMI = (weight/((height/100)**2)).toFixed(2);

const app ={
    data(){
        return{
            firstname: 'Apisit',
            lastname: 'Kaewnongsaeng',
            image:'images/myProfile.jpg',
            url: 'http://www.sit.kmutt.ac.th/',
            BMI:BMI
        }
    }
}

mountedApp = Vue.createApp(app).mount('#app')