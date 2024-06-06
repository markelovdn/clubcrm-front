export const menuItems: { [key: string]: { name: string; link: string; icon: string; roles: string[] }[] } = {
  organizations: [{ name: "Организации", link: "/organizations", icon: "account_circle", roles: ["root", "admin"] }],
  coaches: [{ name: "Тренеры", link: "/coaches", icon: "account_circle", roles: ["root", "admin", "manager"] }],
  referees: [{ name: "Судьи", link: "/referees", icon: "account_circle", roles: ["root", "admin"] }],
  athletes: [{ name: "Спортсмены", link: "/athletes", icon: "group", roles: ["root", "admin", "manager", "coach"] }],
  parents: [
    { name: "Родители", link: "/parents", icon: "account_circle", roles: ["root", "admin", "manager", "coach"] },
  ],
  profile: [
    {
      name: "Личный кабинет",
      link: "/profile",
      icon: "groups_2",
      roles: ["root", "admin", "manager", "coach", "parentad", "athlete", "referee"],
    },
  ],
  competitions: [
    {
      name: "Соревнования",
      link: "/competitions",
      icon: "account_circle",
      roles: ["root", "admin", "manager", "coach", "parentad", "athlete", "referee"],
    },
  ],
  attestations: [
    {
      name: "Аттестации",
      link: "/attestations",
      icon: "business_center",
      roles: ["root", "admin", "manager", "coach", "parentad", "athlete"],
    },
  ],
  events: [
    {
      name: "Мероприятия",
      link: "/events",
      icon: "account_circle",
      roles: ["root", "admin", "manager", "coach", "parentad", "athlete"],
    },
  ],
  finances: [
    {
      name: "Финансы",
      link: "/finances",
      icon: "account_circle",
      roles: ["root", "admin", "manager"],
    },
  ],
  documents: [
    {
      name: "Документы",
      link: "/documents",
      icon: "account_circle",
      roles: ["root", "admin", "manager"],
    },
  ],
};
