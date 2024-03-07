# Write your MySQL query statement below
SELECT e.employee_id, e.name, COUNT(sub.employee_id) AS reports_count, ROUND(AVG(sub.age)) AS average_age
FROM Employees e
LEFT JOIN Employees sub ON e.employee_id = sub.reports_to
GROUP BY e.employee_id
HAVING reports_count > 0
ORDER BY e.employee_id;
