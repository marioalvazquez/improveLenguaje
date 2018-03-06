<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Improve Lennguaje</title>
  </head>
  <body>
    <div class="page-wrap">
    <header>
      <div class="row">
        <div class="col-xs-6 col-sm-4 nav-logo">
          <h1><a href=""><span style="font-weight:bold">Improve</span>Lenguaje</a></h1>
        </div>
        <div class="col-sm-4 nav-navigation">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Team</a></li>
            <li><a href="">Services</a></li>
          </ul>
        </div>
        <div class="col-sm-4 nav-cta text-right">
          <a href="#" class="bttn">Contact Now</a>
        </div>
        <div class="col-xs-6 text-right nav-mobile">
          <a href="" id="toggleMenu"><span class="icon-menu"></span></a>
        </div>
      </div>
    </header>
    <div class="mobile-menu dark-blue white-text">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Team</a></li>
        <li><a href="">Services</a></li>
      </ul>
    </div>
    <div class="hero">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-8">
            <h2>Learn new languages</h2>
            <h3>No need <br> to leave home</h3>
            <a href="" class="bttn">Get Started!</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="content-wrap">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 table-responsive">
            <table class="table table-hover table-bordered table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                <?php
                  include "connection.php";
                  $query = "SELECT * FROM Client";
                  $result = $connect->query($query);
                  while ($row=$result->fetch_assoc()) {
                    ?>

                    <tr>
                      <td><?php echo $row['Name']; ?></td>
                      <td><?php echo $row['Mail']; ?></td>
                      <td><?php echo $row['Phone']; ?></td>
                      <td><?php echo $row['Address']; ?></td>
                      <td><?php echo $row['Message']; ?></td>
                    </tr>

                    <?php
                  }
                  ?>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    <footer>
      <div class="container-fluid blue white-text">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <h3><bold>Improve</bold> Lenguaje</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                <a href="" target="_blank"><span class="icon-facebook"></span></a>
                <a href="" target="_blank"><span class="icon-twitter"></span></a>
                <a href="" target="_blank"><span class="icon-whatsapp"></span></a>
              </p>
            </div>
            <div class="col-sm-12">
              <div class="col-xs-12 col-sm-8 col-md-6 line-break" style="margin:0 auto"></div>
            </div>
            <div class="col-sm-12 text-center">
              <p>ImproveLenguaje.com © 2017 All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
    <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
    <script src="/dist/js/initializer.js" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="/dist/js/jquery.counterup.min.js"></script>
    <script src="/dist/js/index.js" charset="utf-8"></script>
  </body>
</html>
