package outManegement.backend.repository;

import outManegement.backend.dao.Unit;

import java.util.List;
import java.util.Optional;

public interface UnitRepository {
    public List<Unit> list();
    public Long create(Unit unit);

    public Optional<Unit> findById(Long id);
}
