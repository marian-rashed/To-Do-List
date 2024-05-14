$(document).ready(() => {

    $("#saveButton").click(() => {
        let value=$("#text").val();
        $("#container").append(`
            <div class="headers">
                <p class="taskText">${value}</p>
                <p class="taskStatus">in progress</p>
                <button class="deleteButton">DELETE</button>
                <button class="finishButton">FINISHED</button>
            </div>
        `);
    });


    $(document).on("click", ".finishButton", function () {
        $(this).closest(".headers").find(".taskStatus").html("Finished").css("color", "green");

    });

    $(document).on("click", ".deleteButton", function () {
        $(this).parent(".headers").remove();

    });


});