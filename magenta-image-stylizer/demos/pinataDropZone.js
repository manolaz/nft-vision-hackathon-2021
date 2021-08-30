Dropzone.autoDiscover = false;
const pinataApiKey = "533c09e27275876e201e";
const pinataSecretApiKey =
  "952e02114ea175b917cddc2b12eb118ae9b8d73ab9e6a78b99e518fbc95ce49";
// const pinataApiKey = "add your own keys here";
// const pinataSecretApiKey = "add your own keys here";

$("#dropzone").dropzone({
  previewsContainer: ".dropzonePreview",
  url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //maxFilesize: 2,
  //maxFiles: 1,
  acceptedFiles: ".jpeg,.jpg,.png",
  //uploadMultiple: true,
  //parallelUploads: 1,
  headers: {
    pinata_api_key: pinataApiKey,
    pinata_secret_api_key: pinataSecretApiKey,
  },
  init: function () {
    this.on("sending", function (file, xhr, formData) {
      const metadata = JSON.stringify({
        name: "testname",
        keyvalues: {
          exampleKey: "exampleValue",
        },
      });
      formData.append("pinataMetadata", metadata);
    });
  },
  error: function (file, message) {
    $(file.previewElement)
      .addClass("dz-error")
      .find(".dz-error-message")
      .text(message.error);
    console.log("ERROR: ", message.error);
  },
  success: function (file, response) {
    console.log("SUCCESS: ", response);
    $("#response_from_upload").html("Response: " + response.IpfsHash);
  },
});
