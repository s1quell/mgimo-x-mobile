import { Agenda, LocaleConfig } from "react-native-calendars";
import { StyleSheet } from "react-native";

//#region Локализация календаря

// Создаем русскую локализацию календаря

LocaleConfig.locales["ru"] = {
    monthNames: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ],
    monthNamesShort: [
        "Янв.",
        "Фев.",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль.",
        "Авг.",
        "Сент.",
        "Окт.",
        "Ноябрь",
        "Дек.",
    ],
    dayNames: [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ],
    dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],

    today: "Сегодня",
};
LocaleConfig.defaultLocale = "ru";
//#endregion

//#region Тема календаря
export const calendar_styles = StyleSheet.create({
    calendar_theme: {
        backgroundColor: "#FFF",
        calendarBackground: "#FFF",
        textSectionTitleColor: "#b6c1cd",
        textSectionTitleDisabledColor: "#FFF",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#007AFF",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        dotColor: "#007AFF",
        selectedDotColor: "#ffffff",
        monthTextColor: "#32353D",
        textDayFontFamily: "Montserrat",
        textMonthFontFamily: "Montserrat-Bold",
        textDayHeaderFontFamily: "Montserrat-Bold",
        agendaKnobColor: "#F2F2F2",
        textDayFontSize: 16,
        textMonthFontSize: 18,
        textDayHeaderFontSize: 16,
    },
});
//#endregion
