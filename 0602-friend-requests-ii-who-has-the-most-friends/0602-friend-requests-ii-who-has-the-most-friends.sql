# Write your MySQL query statement below
SELECT id, num
FROM (
    SELECT user_id AS id, COUNT(*) AS num
    FROM (
        SELECT requester_id AS user_id
        FROM RequestAccepted
        UNION ALL
        SELECT accepter_id AS user_id
        FROM RequestAccepted
    ) AS t
    GROUP BY user_id
    ORDER BY num DESC, user_id ASC
) AS result
LIMIT 1;
