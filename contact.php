<?php include("header_2.php"); ?>

<div class="container">
<!--CONTACT FORM-->
<div class="row">
<div class="col">
<h3>Contact us</h3>
<form method="POST" name="contact_form" action="sendForm.php">
<div class="form-group">
		<label for='name'>Name</label>
		<input type="text" class="form-control" name="name">
</div>
<div class="form-group">
		<label for='email'>Email address</label>
		<input type="text" class="form-control" name="email">
</div>
	<div class="form-group">
		<label for='message'>Message</label>
		<textarea name="message" class="form-control"></textarea>
	</div>
	<input type="submit" class="btn btn-primary" name='submit' value="submit">
</form>
</div>
<div class="col">
    <img src="img/hat.png" class="contact-hat" width="444" height="224">
</div>
</div>
</div>

<?php include("footer.php");?>