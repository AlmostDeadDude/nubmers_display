<?php
//we read the numbers from the file input.txt
$numbers = file_get_contents('input.txt');
//those are simple integer numbers separated by comma
//we split the string into an array
$numbers = explode(',', $numbers);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://kit.fontawesome.com/d6065b6a9b.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>String Art Numbers</title>
</head>

<body>
    <div class="wrapper">
        <header>
            <div id="timeInput" class="inputGroup">
                <label for="time">Time step [s]</label>
                <input type="number" id="time" name="time" min="2" max="20" value="2">
            </div>
            <div id="progress" class="inputGroup">
                <label for="progress_step">Current progress</label>
                <div style="width: 100%; position: relative;">
                    <input type="number" name="progress_step" id="progress_step">
                    <span id="progress_total">/</span>
                    <button id="goToStep">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </header>
        <main id="a">
            <div class="num num-n4"><span></span></div>
            <div class="num num-n3"><span></span></div>
            <div class="num num-n2"><span></span></div>
            <div class="num num-n1"><span></span></div>
            <div class="num num-0"><span>0</span></div>
            <div class="num num-p1"><span>...</span></div>
            <div class="num num-p2"><span>...</span></div>
            <div class="num num-p3"><span>...</span></div>
            <div class="num num-p4"><span>...</span></div>
        </main>
        <div class="buttons">
            <button id="btn-start"><i class="fa-solid fa-play"></i></button>
            <button id="btn-stop"><i class="fa-solid fa-stop"></i></button>
        </div>
        <div id="circle"></div>
    </div>
    <script>
        <?php
        //we pass the numbers to the javascript
        echo 'const numbers = ' . json_encode($numbers) . ';';
        ?>
    </script>
    <script src="script.js"></script>
</body>

</html>