<?php

$host = 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'psy';

$conn = new mysqli($host, $db_user, $db_password, $db_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function sha1Password($password) {
    return sha1($password);
}

function addUser($conn, $login, $password) {
    $hashed_password = sha1Password($password);
    $query = "INSERT INTO uzytkownicy (login, haslo) VALUES ('$login', '$hashed_password')";
    if ($conn->query($query) === TRUE) {
        $message = "Konto zostało dodane";
    } else {
        $message = "Błąd przy dodawaniu konta: " . $conn->error;
    }
    return $message;
}

function checkLoginExists($conn, $login) {
    $query = "SELECT login FROM uzytkownicy WHERE login = '$login'";
    $result = $conn->query($query);
    return $result->num_rows > 0;
}

$message = ""; // Inicjalizacja pustego komunikatu

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST['login']) || empty($_POST['password']) || empty($_POST['confirm_password'])) {
        $message = "Wypełnij wszystkie pola";
    } else {
        $login = $_POST['login'];
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm_password'];
        if ($password != $confirm_password) {
            $message = "Hasła nie są takie same, konto nie zostało dodane";
        } else {
            if (checkLoginExists($conn, $login)) {
                $message = "Login występuje w bazie danych, konto nie zostało dodane";
            } else {
                $message = addUser($conn, $login, $password);
            }
        }
    }
}

$conn->close();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forum o psach</title>
    <link rel="stylesheet" href="./styl4.css">
</head>
<body>
    <section class="banner">
        <div class="baner">
            <h1>Forum wielbicieli psów</h1>
        </div>
    </section>

    <section class="content">
        <div class="lewy">
            <img src="./obraz.jpg" alt="foksterier">
        </div>
        <div class="prawy">
            <div class="gora">
                <h2>Zapisz się</h2>
                <form action="" method="post">
                    <label for="login">login:</label>
                    <input type="text" id="login" name="login" required>
                        <br>
                    <label for="password">hasło:</label>
                    <input type="password" id="password" name="password" required>
                        <br>
                    <label for="confirm_password">powtórz hasło:</label>
                    <input type="password" id="confirm_password" name="confirm_password" required>
                        <br>
                    <input type="submit" value="Zapisz">
                </form>

                <p><?php echo $message; ?></p>

            </div>
            <div class="dol">
                <h2>Zapraszamy wszystkich</h2>
                <ol>
                    <li>właścicieli psów</li>
                    <li>weterynarzy</li>
                    <li>tych, co chcą kupić psa</li>
                    <li>tych, co lubią psy</li>
                </ol>
                <a href="./regulamin.html">Przeczytaj regulamin forum</a>
            </div>
        </div>
    </section>

    <section class="footer">
        <div class="stopkka">
            <p>Stronę wykonał: Szymek Gural</p>
        </div>
    </section>
</body>
</html>
