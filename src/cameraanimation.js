

function moveCameraSmoothly() {
    const startPosition = camera.position.clone();
    const targetPosition = new THREE.Vector3(10 , 10,10);
    const duration = 3; // duration in seconds

    let startTime = null;

    function animate(time) {
        if (!startTime) startTime = time;
        const progress = (time - startTime) / (duration * 1000); // Calculate progress from 0 to 1
        if (progress < 1) {
            camera.position.lerpVectors(startPosition, targetPosition, progress);
            controls.update();
            render();
            requestAnimationFrame(animate);
        } else {
            camera.position.copy(targetPosition);
            controls.update();
            render();
        }
    }

    requestAnimationFrame(animate);
}