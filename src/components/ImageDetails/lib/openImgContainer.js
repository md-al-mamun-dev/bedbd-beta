export default function openImgContainer(id) {
    const imgDetailsContainer = document.getElementById(id);
    if(imgDetailsContainer){
        imgDetailsContainer.style.display = 'block';
    }
}
