export default {
  subject: `Your E-Receipt - Order #<%= order_number %>`,
  body: `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <meta name="author" content="">
      <title> - Email</title>
  </head>
  
  <body style="background: #fff; margin: 0 auto; font-family: 'Helvetica'; font-size: 14px; ">
  <table width="600" border="0" cellspacing="0" cellpadding="0" 
  style="margin: 0 auto;
      background-color: <%= borderColor %>;
      padding: 20px;
      color: #3F4551;
      background-image: url(<%= backgroundImage %>);
      background-repeat: no-repeat;"
  >
  <tbody>
      <tr style="
          background-color: <%= backGroundColor %>;
          border-radius: 5px;
          padding: 15px;
          width: 100%;
      ">
          <td colspan="2">
              <table style="width: 100%; border-bottom: 1px solid #F3F3F3; padding: 10px 20px;">
                  <tr>
                      <td>
                          <a href="<%= websiteLink %>"><img src="<%= websiteImage %>"></a>
                      </td>
                      <td>
                          <table style="float: right;">
                              <tr>
                                  <td style="padding-right: 10px;">
                                      <a href="<%= instagramLink %>"><img height="13" width="13" src="<%= instagramIcon %>"></a>
                                  </td>
                                  <td style="padding-right: 10px;">
                                      <a href="<%= linkedinLink %>"><img height="13" width="14" src="<%= linkedinIcon %>"></a>
  
                                  </td>
                                  <td style="padding-right: 10px;">
                                      <a href="<%= youtubeLink %>"><img height="11" width="15" src="<%= youtubeIcon %>"></a>
                                  </td>
                                  <td style="padding-right: 10px;">
                                      <a href="<%= twitterLink %>"><img height="14" width="16" src="<%= twitterIcon %>"></a>
                                  </td>
                                  <td style="padding-right: 10px;">
                                      <a href="<%= facebookLink %>"><img height="15" width="7" src="<%= facebookIcon %>"></a>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
                      <table border="0" cellspacing="0" cellpadding="0" style="padding: 20px 20px 60px 20px;">
                          <tr>
                              <td>
                                  <table border="0" cellspacing="0" cellpadding="0">
                                      <tr style="position: relative; float: left;">
                                          <td style="font-size: 24px; color: #3F4551; ">
                                              Hi <%= first_name %>,
                                          </td>
                                      </tr>
                                      <tr style="padding-top: 25px; position: relative; float: left; width: 100%">
                                          <td style="font-size: 15px; text-align: left; line-height: 22px;">
                                              Your order has been received and is being processed. We will notify you when
                                              the parcel is ready.
                                          </td>
                                      </tr>
                                      <tr
                                        style="padding-top: 25px; position: relative; float: left; width: 100%; display: flex; text-align: center;">
                                        <td style="width: 100%;">
                                            <button
                                                style="border-radius: 5px; background-color: #F83F5B; color: #ffffff; width: 145px; height: 45px; cursor: pointer; border-color: unset; font-size: 16px;">
                                                Order Status
                                            </button>
                                        </td>
                                    </tr>
                                      <tr
                                          style="padding-top: 25px; position: relative; float: left;  width: 100%; display: flex;">
                                          <td style="width: 100%;">
                                              <table
                                                  style="background-image: url(https://pch-public-photo.s3.amazonaws.com/images/path+top.png), url(https://pch-public-photo.s3.amazonaws.com/images/path+bot.png); background-repeat: no-repeat; width: 100%; background-position: top, bottom; padding-top: 10px; padding-bottom: 10px; border-spacing: unset;">
                                                  <tr>
                                                      <th
                                                          style="color: #DF7758; font-size: 18px; padding-bottom: 20px; text-align: left; padding-left: 20px; border-right: solid #D8D8D8 1px; font-weight: unset;">
                                                          Billing Address
                                                      </th>
                                                      <th
                                                          style="color: #DF7758; font-size: 18px; padding-bottom: 20px; text-align: left; padding-left: 20px; font-weight: unset;">
                                                          Delivery Address
                                                      </th>
                                                  </tr>
                                                  <tr style="font-size: 16px;">
                                                      <td
                                                          style="padding-left: 20px; padding-right: 20px; border-right: solid #D8D8D8 1px; width: 50%; line-height: 24px;">
                                                          <span>Name: </span>
                                                          <span style="font-weight: bold;"><%= billing_name %></span><br>
                                                          <span>Address: </span>
                                                          <span style="font-weight: bold;"><%= billing_address %></span>
                                                      </td>
                                                      <td
                                                          style="padding-left: 20px; padding-right: 20px; width: 50%; line-height: 24px;">
                                                          <span>Name: </span>
                                                          <span style="font-weight: bold;"><%= delivery_name %></span><br>
                                                          <span>Address: </span>
                                                          <span style="font-weight: bold;"><%= delivery_address %></span>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                      <tr
                                          style="padding-top: 25px; position: relative; float: left; width: 100%; display: flex;">
                                          <td
                                              style="color: #DF7758; font-size: 18px; text-align: left; border-top: 2px solid #E9E6E6; width: 100%; padding-top: 25px">
                                              Order Summary
                                          </td>
                                      </tr>
                                      <tr
                                          style="padding-top: 25px; position: relative; float: left; width: 100%; display: flex;">
                                          <td style="font-size: 16px; text-align: left; width: 40%;">
                                              <img src="https://pch-public-photo.s3.amazonaws.com/images/item.png" />
                                              Order No: <span style="font-weight: bold;"><%= order_number %></span>
                                          </td>
                                          <td style="font-size: 16px; text-align: left; width: 60%;">
                                              <img src="https://pch-public-photo.s3.amazonaws.com/images/item.png" />
                                              Delivery By: <span style="font-weight: bold;"><%= delivery_time %></span>
                                          </td>
                                      </tr>
                                      <tr
                                          style="padding-top: 25px; position: relative; float: left; width: 100%; display: flex;">
                                          <td style="font-size: 16px; text-align: left; width: 40%;">
                                              <img src="https://pch-public-photo.s3.amazonaws.com/images/item.png" />
                                              Delivery Type: <span style="font-weight: bold;"><%= delivery_type %></span>
                                          </td>
                                          <td style="font-size: 16px; text-align: left; width: 60%; margin-top: -6px;">
                                              <img src="https://pch-public-photo.s3.amazonaws.com/images/item.png" />
                                              Payment Method: <span style="font-weight: bold;">
                                                  <img
                                                      src="https://pch-public-photo.s3.amazonaws.com/images/payment-method.png" />
                                                  <%= payment_information %>
                                              </span>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding-top: 25px;">
                                              <table style="width: 100%; border-collapse: collapse;">
                                                  <tr style="background-color: #333333; color: #FFFFFF;">
                                                      <th
                                                          style="padding: 10px; font-weight: unset; border: solid #F4F4F4 2px">
                                                          Image</th>
                                                      <th
                                                          style="padding: 10px; font-weight: unset; border: solid #F4F4F4 2px">
                                                          Name</th>
                                                      <th
                                                          style="padding: 10px; font-weight: unset; border: solid #F4F4F4 2px">
                                                          Quantity</th>
                                                      <th
                                                          style="padding: 10px; font-weight: unset; border: solid #F4F4F4 2px">
                                                          Price</th>
                                                  </tr>
                                                  <% _.forEach(items, function(item) { %>
                                                  <tr>
                                                      <td style="border: solid #F4F4F4 2px; text-align: center;">
                                                          <img src="" />
                                                      </td>
                                                      <td style="border: solid #F4F4F4 2px; padding-left: 10px;">
                                                          <%= item.productName %>
                                                      </td>
                                                      <td style="border: solid #F4F4F4 2px; text-align: center;">
                                                          <%= item.quantity %>
                                                      </td>
                                                      <td style="border: solid #F4F4F4 2px; text-align: right; padding-right: 10px;">
                                                          $0
                                                      </td>
                                                  </tr>
                                                  <% }); %>
                                                  <tr style="width: 100%; border: solid #F4F4F4 2px;">
                                                      <td colspan="4" style="width: 100%; line-height: 5px;">
                                                          <p style="width: 55%; float: right; padding-right: 10px;">
                                                              <span>Sub Total</span>
                                                              <span style="float: right; font-weight: 700;">$0</span>
                                                          </p>
                                                          <p style="width: 55%; float: right; padding-right: 10px;">
                                                              <span>Delivery Fee</span>
                                                              <span style="float: right; font-weight: 700;">$0</span>
                                                          </p>
                                                          <p style="width: 55%; float: right; padding-right: 10px;">
                                                              <span
                                                                  style="color: #DF7758; font-weight: 700;">Total</span><br>
                                                              <span style="float: right; font-weight: 700;">$0</span>
                                                          </p>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
                      <table style="width: 100%; padding: 20px; border-top: 1px solid #F3F3F3;">
                          <tr style="position: relative; float: left; width: 100%">
                              <td>
                                  <div style="font-size: 19px; font-weight: 600;">Regards!</div><br>
                                  <div style="font-size: 15px;"> Team.</div>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
  </body>
  
  </html>
    `,
};
