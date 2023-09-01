
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.slim.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
        <style>
            body{
                background-image: url(beautiful-nature-landscape-with-mountains-lake.jpg);
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                color: white;
                text-align: center;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }
            .container{
                padding: 50px;
                border: 1px solid white;
                border-radius: 10px;
            }
            .btn{
                border-radius: 20px;
            }
            .form-control{
                border-radius: 20px;
            }
        </style>
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <form action="">
            <div class="form-group">
                
                <input type="User name" class="form-control" placeholder="Username">
                
            </div>
            <div class="form-group">
                <input type="User name" class="form-control" placeholder="Password">

            </div>
            <div class="form-group form-check float-left">
                <label for="form-check-label">
                    <input class="form-check-input" type="checkbox" name="Remember">Remember me
                </label>
            </div> 
            <div class="float-right">
                <label for="">Forget Password</label>

            </div>
            <div>
                <button class="btn btn-light btn-block">Login</button>
            </div>
            <div class="py-5">
                <p>Don't have any account <strong> "Register Here"</strong></p>
            </div>
        </form>
    </div>
</body>
</html>
