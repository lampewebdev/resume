<style>
  .container {
    background: #fafafa;
  }
  .profile {
    font-size: 20px;
    margin-top: 11px;
    font-weight: 700;
    text-transform: uppercase;
    background: #fafafa;
  }
  .profile .job {
    font-size: 13px;
    color: #777777;
  }
  .profile-picture {
    -webkit-clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
    clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
  }

  .profile-information {
    background: #fafafa;
    list-style: none;
    margin: 0 auto 30px;
    display: table;
  }

  ul.profile-information li {
    border-left: solid 2px #eee;

    padding: 0 0 23px 20px;

    padding-bottom: 23px;
    padding-left: 20px;

    font-size: 14px;

    color: #787878;
  }
  ul.profile-information li {
    font-size: 14px;
    color: #787878;
  }
  ul.profile-information li:first-child {
    padding-bottom: 10px;
    padding-left: 30px;
    position: relative;
  }

  ul.profile-information li:first-child {
    padding-bottom: 10px;
    padding-left: 30px;
  }

  li:first-child::before {
    background: #ffc500 !important;
  }
  ul.profile-information li::before {
    border-color: #ffb100 !important;
  }
  ul.profile-information li:first-child::before {
    content: "";
    font-size: 13.5px;
    margin-left: -51px;
    margin-top: -30px;
    margin-bottom: 20px;
    position: relative;
    border: 0;
  }
  ul.profile-information li:first-child::before {
    position: relative;
    width: 42px;
    height: 42px;
    box-shadow: 0px 2px 32px 0px rgba(4, 123, 248, 0.3);
  }

  ul.profile-information li:first-child::after {
    background: url("/employee.png") no-repeat;

    background-size: auto;

    background-size: 32px 32px;

    content: "";

    width: 32px;

    height: 32px;

    position: absolute;

    top: 0;

    left: 0;

    margin: 2px -16px;
  }

  ul.profile-information li::before {
    content: "";
    border: solid 2px;
    border-top-color: currentcolor;
    border-right-color: currentcolor;
    border-bottom-color: currentcolor;
    border-left-color: currentcolor;
    width: 8px;
    height: 8px;
    border-radius: 50px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    font-size: 8px;
    margin-left: -25px;
    margin-top: 2px;
    font-weight: 400;
    background: #fff;
    display: block;
    position: absolute;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="flex m-4">
  <div class="container mx-auto shadow-xl self-center m-6 rounded">
    <div class="profile p-2">
      <div>Michael Lazarski</div>
      <div class="job">Web Developer</div>
    </div>
    <img class="profile-picture" src="profile.jpg" alt="profile picture" />
    <ul class="profile-information">
      <li />
      <li>
        <p>
          <span>Name:</span>
          Michael Lazarski
        </p>
      </li>
      <li>
        <p>
          <span>Degree:</span>
          Computer Science B.Sc.
        </p>
      </li>
      <li>
        <p>
          <span>Birthday:</span>
          13.08.1986
        </p>
      </li>
      <li>
        <p>
          <span>Email:</span>
          michael@lampeweb.de
        </p>
      </li>
      <li>
        <p>
          <span>Github:</span>
          github.com/lampewebdev
        </p>
      </li>
    </ul>
  </div>
</div>
